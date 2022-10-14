import { List } from "../atoms/List";
import { ListEl } from "../atoms/ListEl";
import { RouterLinkStyled } from "../atoms/RouterLinkStyled";
import { LinkStyled } from "../atoms/LinkStyled";
import { Text } from "../atoms/Text";
export default function Navbar() {
  return (
    <List width="300px">
      <ListEl>
        <RouterLinkStyled to="/">
          <Text color="#fff">HOME</Text>
        </RouterLinkStyled>
      </ListEl>
      <ListEl>
        <LinkStyled>
          <Text color="#fff">TOURS</Text>
        </LinkStyled>
      </ListEl>
      <ListEl>
        <LinkStyled>
          <Text color="#fff">ABOUT</Text>
        </LinkStyled>
      </ListEl>
      <ListEl>
        <LinkStyled>
          <Text color="#fff">HELP</Text>
        </LinkStyled>
      </ListEl>
    </List>
  );
}
