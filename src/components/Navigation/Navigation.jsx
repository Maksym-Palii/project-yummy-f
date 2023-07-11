import {
    NavContainer,
    StyledLink,
    TextContainer,
    WrapperSearchIcon,
} from './Navigation.styled';

const Navigation = () => {
    return (
        <NavContainer>
            <StyledLink to="/categories/:categoryName">Categories</StyledLink>
            <StyledLink to="/add">Add recipes</StyledLink>
            <StyledLink to="/my">My recipes</StyledLink>
            <StyledLink to="/favorite">Favorites</StyledLink>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
            <StyledLink to="/search">
                <WrapperSearchIcon />
                <TextContainer>Search</TextContainer>
            </StyledLink>
        </NavContainer>
    );
};

export default Navigation;
