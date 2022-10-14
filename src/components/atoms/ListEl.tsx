import styled from "styled-components";
type LiProps = {
  liIndex?: number | undefined;
  pageType?: string | undefined;
  el?: number | undefined;
  activeCircle_?: number | undefined;
  alignItems?: string;
  justifyContent?: string;
  inner?: boolean;
  outer?: boolean;
};

export const ListEl = styled.li<LiProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  ${(props) => {
    if (props.pageType !== undefined && props.liIndex !== undefined) {
      return props.pageType !== "favourites"
        ? `position: absolute; left: ${
            33.3 * props.liIndex + 0.5
          }%; border: 1px solid #D3EAFF;`
        : `flex-wrap: wrap; border: 1px solid #D3EAFF; margin-bottom: 20px`;
    }
    if (props.outer) {
      return `width: 24px;
        height: 24px;
        border-radius: 50%;
        position: relative;
        margin-right: 5px;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #000;
        `;
    }
  }}
`;
