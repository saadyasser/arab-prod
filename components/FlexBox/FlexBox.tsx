/**
 * FlexBox Layout
 *
 * A customizable FlexBox layout that can be used for design flexible responsive layout structure.
 *
 * @layout
 * @param {FlexProps} props
 *
 * props: {
 *  align, justify, wrap, direction, basis, grow, shrink, inline
 * }
 *
 * @example
 * <FlexBox gap={4} direction="column">
 *    <Button type="primary" label="Click me" url="/some-page" />
 *    <Button type="secondary" label="Click me 2" url="/some-page" />
 * </FlexBox>
 *
 * @returns {React.ReactElement} A flex container with Flexbox properties.
 */

import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const FlexBox: React.FC<FlexProps> = ({
  align = "right",
  justify = "right",
  wrap = "nowrap",
  direction = "row",
  basis = "auto",
  grow = 0,
  shrink = 1,
  inline = false,
  className,
  children,
  ...rest
}) => {
  return (
    <Flex
      align={align}
      justify={justify}
      wrap={wrap}
      direction={direction}
      basis={basis}
      grow={grow}
      shrink={shrink}
      inline={inline}
      className={className}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default FlexBox;
