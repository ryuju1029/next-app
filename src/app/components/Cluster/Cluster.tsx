import styled, { css } from "styled-components";
import type { Gap, SeparateGap } from "../../types/Gap";
import type { CSSProperties } from "react";
import { useSpacing } from "../../hooks/useSpacing";

export const Cluster = styled.div<{
  // trueの場合はinline-flex
  inline?: boolean;
  // 間隔の指定
  gap?: Gap | SeparateGap;
  //　垂直方向の揃え方
  align?: CSSProperties["alignItems"];
  // 水平方向の揃え方
  justify?: CSSProperties["justifyContent"];
}>(({ gap = 0.5, align, justify, inline }) => {
  const rowGap = gap instanceof Object ? useSpacing(gap.row) : useSpacing(gap);
  const columnGap =
    gap instanceof Object ? useSpacing(gap.column) : useSpacing(gap);

  return css`
    display: ${inline ? "inline-flex" : "flex"};
    flex-wrap: wrap;
    ${align && `align-items: ${align};`}
    ${justify && `justify-content: ${justify};`}
    row-gap: ${rowGap};
    column-gap: ${columnGap};

    /* 
      Chromeで空の要素にflex-gapがあると印刷時にレイアウトが崩れるので gap の値を0にする
      See https://bugs.chromium.org/p/chromium/issues/detail?id=1161709
    */
    &:empty {
      gap: 0;
    }
  `;
});
