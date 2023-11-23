import React from "react";
// import Section from "../../Section";
import Button from "../Button";
import Loader from "../Loader";
import ImageModal from "../ImageModal";
import fetchFromUrl from "../fetch";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";

import css from "./ImagesApp.module.css";

const enumStatus = {
    idle: 1,
    pending: 2,
    rejected: 3,
    resolved: 4,
    loading: 5,
};

const initState = {
    query: null,
    images: [],
    total: 0,
    page: 1,
    perPage: 12,
    showModal: false,
    contentModal: null,
    error: null,
    status: enumStatus.idle,
};

export default class ImagesApp extends React.Component {
    state = initState;

    handleSubmit = query => {
        this.setState(initState);
        if (query) {
            this.setState({ query });
        }
    };

    handleLoadClick = event => {
        const { images, total } = this.state;
        if (images.length < total) {
            this.setState(({ page }) => ({ page: page + 1 }));
        }
    };

    handleImageClick = image => {
        if (image) {
            this.setState({ showModal: true, contentModal: image });
        }
    };

    closeModal = () => {
        this.setState({ showModal: false, contentModal: null });
    };

    componentDidUpdate(prevProps, prevState) {

        const time = 1000;
        const { pending, rejected, resolved, loading } = enumStatus;
        const { perPage } = this.state;

        const prevQuery = prevState.query;
        const nextQuery = this.state.query;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        const isUpdatedQuery = prevQuery !== nextQuery;
        const isUpdatedPage = prevPage !== nextPage;
        const isUpdate = isUpdatedQuery || isUpdatedPage;

        if (isUpdatedQuery) {
            this.setState({ status: pending });
        }

        if (isUpdatedPage) {
            this.setState({ status: loading });
        }

        if (isUpdate) {
            setTimeout(
                () => {
                    fetchFromUrl(nextQuery, nextPage, perPage)
                        .then(
                            ({ hits, totalHits }) => {
                                this.setState(
                                    ({ images, total }) => (
                                        {
                                            images: [...images, ...hits],
                                            total: isUpdatedQuery ? totalHits : total,
                                        }
                                    )
                                );
                                this.setState({ status: resolved });
                            }
                        )
                        .catch(
                            error => this.setState({ error, status: rejected })
                        );
                }, time
            );
        }
    };

    render() {
        const { pending, resolved, loading } = enumStatus;
        const { images, status, showModal, contentModal } = this.state;
        return (
            <div className={css.ImagesApp}>
                <h2>ImagesApp</h2>
                <Searchbar onSubmit={this.handleSubmit} />
                {
                    (status === resolved || status === loading) &&
                    <ImageGallery
                        images={images}
                        onImageClick={this.handleImageClick}
                    />
                }
                {
                    (status === resolved && images.length > 0) &&
                    <Button onLoadClick={this.handleLoadClick} />
                }
                {
                    (status === pending || status === loading) &&
                    <Loader />
                }
                {
                    showModal &&
                    <ImageModal
                        contentModal={contentModal}
                        onClose={this.closeModal}
                    />
                }
            </div>
        )
    }
}