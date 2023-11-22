import React from "react";
import Section from "../../Section";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../../Modal";
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
    page: 1,
    showModal: false,
    error: null,
    status: enumStatus.idle,
};

export default class ImagesApp extends React.Component {
    state = initState;

    handleSubmit = query => {
        this.setState({ query });
    };

    handleLoadClick = event => {
        this.setState(({ page }) => ({ page: page + 1 }));
    };

    handleImageClick = image => {
        this.setState(({showModal}) => ({showModal: !showModal}));
    };

    componentDidUpdate(prevProps, prevState) {

        const time = 1000;
        const { pending, rejected, resolved, loading } = enumStatus;

        const prevQuery = prevState.query;
        const nextQuery = this.state.query;

        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevQuery !== nextQuery) {
            this.setState({ page: 1, status: pending });
            setTimeout(
                () => {
                    fetchFromUrl(nextQuery)
                        .then(({ hits }) => this.setState({ images: [...hits], status: resolved }))
                        .catch(error => this.setState({ error, status: rejected }));
                }, time
            );
        }

        if (prevPage !== nextPage) {
            this.setState({ status: loading });
            setTimeout(
                () => {
                    fetchFromUrl(nextQuery, nextPage)
                        .then(({ hits }) => {
                            this.setState(({ images }) => ({ images: [...images, ...hits] }));
                            this.setState({ status: resolved })
                        })
                        .catch(error => this.setState({ error, status: rejected }));
                }, time
            );
        }
    };

    render() {
        const { pending, resolved, loading } = enumStatus;
        const { status } = this.state;
        return (
            <div className={css.normalize}>
                <div className={css.ImagesApp}>
                    <h2>ImagesApp</h2>
                    <Searchbar onSubmit={this.handleSubmit} />
                    {
                        (status === resolved || status === loading)
                        && <ImageGallery images={this.state.result} onImageClick={this.handleImageClick} />
                    }
                    {
                        status === resolved
                        && <Button onLoadClick={this.handleLoadClick} />
                    }
                    {
                        (status === pending || status === loading)
                        && <Loader />
                    }
                    <Section title='Modal test'>
                    <Modal
                        openButtonText="Open"
                        closeButtonText="Close"
                    >
                        <Section title='Modal'>
                            Modal content
                        </Section>
                    </Modal>
                </Section>
                </div>
            </div>
        )
    }
}