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
            <SearchBox>
                <ButtonSubmit type="submit">
                    <ButtonIcon/>
                </ButtonSubmit>

                <SearchField
                    type="text"
                    autocomplete="off"
                    
                    placeholder="Search images and photos"
                />
            </SearchBox>
        </Head>
    );
};