import {
    ButtonSubmit,
    SearchBox,
    Head,
    ButtonIcon, 
    SearchField
} from "./Searchbar.styled";

export const Header = () => {
    return (
        <Head>
            <SearchBox class="form">
                <ButtonSubmit type="submit" class="button">
                    <ButtonIcon/>
                </ButtonSubmit>

                <SearchField
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </SearchBox>
        </Head>
    );
};