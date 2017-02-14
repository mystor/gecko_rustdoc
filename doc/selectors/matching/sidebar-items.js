initSidebarItems({"constant":[["AFFECTED_BY_ANIMATIONS","Whether this element has effective animation styles. Computed externally."],["AFFECTED_BY_CHILD_INDEX","Whether this element has matched any rule whose matching is determined by its position in the tree (i.e., first-child, nth-child, etc.)."],["AFFECTED_BY_EMPTY","Whether this element matches the :empty pseudo class."],["AFFECTED_BY_ID_SELECTOR","Whether this element is affected by an ID selector."],["AFFECTED_BY_NON_COMMON_STYLE_AFFECTING_ATTRIBUTE_SELECTOR","Whether this element is affected by a non-common style-affecting attribute."],["AFFECTED_BY_PRESENTATIONAL_HINTS","Whether this element is affected by presentational hints. This is computed externally (that is, in Servo)."],["AFFECTED_BY_PSEUDO_ELEMENTS","Whether this element has pseudo-element styles. Computed externally."],["AFFECTED_BY_SIBLINGS","Whether this element has matched any rule that is determined by a sibling (when using the `+` or `~` combinators)."],["AFFECTED_BY_STATE","Whether this flag is affected by any state (i.e., non tree-structural pseudo-class)."],["AFFECTED_BY_STYLE_ATTRIBUTE","Whether this element has a style attribute. Computed externally."],["AFFECTED_BY_TRANSITIONS","Whether this element has effective transition styles. Computed externally."],["HAS_EDGE_CHILD_SELECTOR","When a child is added or removed from the parent, the first and last children must be restyled, because they may match :first-child, :last-child, or :only-child."],["HAS_EMPTY_SELECTOR","The element has an empty selector, so when a child is appended we might need to restyle the parent completely."],["HAS_SLOW_SELECTOR","When a child is added or removed from the parent, all the children must be restyled, because they may match :nth-last-child, :last-of-type, :nth-last-of-type, or :only-of-type."],["HAS_SLOW_SELECTOR_LATER_SIBLINGS","When a child is added or removed from the parent, any later children must be restyled, because they may match :nth-child, :first-of-type, or :nth-of-type."]],"fn":[["matches",""],["matches_complex_selector","Determines whether the given element matches the given complex selector."]],"static":[["RECOMMENDED_SELECTOR_BLOOM_FILTER_SIZE",""]],"struct":[["ElementSelectorFlags","Set of flags that are set on either the element or its parent (depending on the flag) if the element could potentially match a selector."],["StyleRelations","Set of flags that determine the different kind of elements affected by the selector matching process."]]});