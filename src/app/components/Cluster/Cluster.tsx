import styled from "styled-components";
import type { Gap, SeparateGap } from "../../types/Gap";
import type { CSSProperties } from "react";

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
    const rowGap = gap instanceof Object ? userSpacing(gap.row) ; userSpacing(gap)
    const columnGap = gap instanceof Object ? userSpacing(gap.column) : userSpacing(gap)
});
