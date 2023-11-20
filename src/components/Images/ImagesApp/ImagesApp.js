import React from "react";
import Section from "../../Section";
import Modal from "../../Modal";
import fetchFromUrl from "../fetch";
import Searchbar from "../Searchbar";

import key from "../key.json";

function getSearchUrl(key, search) {
    return `https://pixabay.com/api/?key=${key}&q=${search}&page=1&image_type=photo&orientation=horizontal&per_page=12/`;
};

export default class ImagesApp extends React.Component {
    state = { search: "" };

    handleSubmit = search => {
        this.setState({ search });
        console.log(getSearchUrl(key.key, search));
        fetchFromUrl(getSearchUrl(key.key, search), search);
    };

    // componentDidUpdate(prevProps, prevState) {
    //     const prevSearch = prevState.search;
    //     const nextSearch = this.state.search;

    //     if (prevSearch !== nextSearch) {
    //         // fetchFromUrl(getSearchUrl(key, nextSearch), nextSearch);
    //     }
    // };

    render() {
        return (
            <div>
                <h2>ImagesApp</h2>

                <Section title='Searchbar'>
                    <Searchbar handleSubmit={this.handleSubmit} />
                </Section>

                {/* <Section title='ImageGallery'>
                    ImageGallery
                </Section> */}

                {/* <Section title='Modal test'>
                    <Modal
                        openButtonText="Open"
                        closeButtonText="Close"
                    >
                        <Section title='Modal'>
                            Modal content
                        </Section>
                    </Modal>
                </Section> */}
            </div>
        )
    }
}