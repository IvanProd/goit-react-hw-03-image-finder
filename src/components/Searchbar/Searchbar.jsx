import { Form, Searchbar, ButtonSubmit, ButtonText, SearchField } from "./Searchbar.styled";

export const Header = () => {
    return (
        <Searchbar>
            <Form>
                <ButtonSubmit onSubmit='' >
                    <ButtonText>Search</ButtonText>
                </ButtonSubmit>
                <SearchField />
            </Form>
            
        </Searchbar>
    )
}