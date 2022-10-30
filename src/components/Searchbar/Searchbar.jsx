import {
    ButtonSubmit,
    SearchBox,
    Head,
    ButtonIcon, 
    SearchField
} from "./Searchbar.styled";
import PropTypes from 'prop-types';
const initialValues = {
    query: '',
    page: 1,
};

export const SearchBar = ({ updateQuery }) => {
    const handleSubmit = (values, { resetForm }) => {
        updateQuery(values);
        resetForm();
    };

    return (
        <Head>
            <SearchBox initialValues={initialValues} onSubmit={handleSubmit}>
                <ButtonSubmit type="submit">
                    <ButtonIcon/>
                </ButtonSubmit>

                <SearchField
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchBox>
        </Head>
    );
};

SearchBar.propTypes = {
    updateQuery: PropTypes.func.isRequired,
};