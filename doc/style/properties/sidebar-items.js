initSidebarItems({"constant":[["INHERIT_ALL","Whether to inherit all styles from the parent. If this flag is not present, non-inherited styles are reset to their initial values."],["SHAREABLE","Whether the `ComputedValues` structure to be constructed should be considered shareable."],["SKIP_ROOT_AND_ITEM_BASED_DISPLAY_FIXUP","Whether to skip any root element and flex/grid item display style fixup."]],"enum":[["CSSWideKeyword","An enum to represent a CSS Wide keyword."],["DeclaredValue","Servo's representation of a declared value for a given `T`, which is the declared value for that property."],["LonghandId","An identifier for a given longhand property."],["PropertyDeclaration","Servo's representation for a property declaration."],["PropertyDeclarationId","An identifier for a given property declaration, which can be either a longhand or a custom property."],["PropertyDeclarationParseResult","The result of parsing a property declaration."],["PropertyId","Servo's representation of a CSS property, that is, either a longhand, a shorthand, or a custom property."],["ShorthandId","An identifier for a given shorthand property."]],"fn":[["apply_declarations","NOTE: This function expects the declaration with more priority to appear first."],["cascade","Performs the CSS cascade, computing new styles for an element from its parent style."],["get_writing_mode","Return a WritingMode bitflags from the relevant CSS properties."]],"mod":[["animated_properties","A module with all the code related to animated properties."],["declaration_block","A property declaration block."],["longhands","A module with all the code for longhand properties."],["shorthands","A module with code for all the shorthand css properties, and a few serialization helpers."]],"struct":[["AnimationDelayIter","An iterator over the values of the animation-delay properties."],["AnimationDirectionIter","An iterator over the values of the animation-direction properties."],["AnimationDurationIter","An iterator over the values of the animation-duration properties."],["AnimationFillModeIter","An iterator over the values of the animation-fill-mode properties."],["AnimationIterationCountIter","An iterator over the values of the animation-iteration-count properties."],["AnimationNameIter","An iterator over the values of the animation-name properties."],["AnimationPlayStateIter","An iterator over the values of the animation-play-state properties."],["AnimationTimingFunctionIter","An iterator over the values of the animation-timing-function properties."],["CascadeFlags","A set of flags to tweak the behavior of the `cascade` function."],["FontFamilyIter","An iterator over the values of the font-family properties."],["TransitionDelayIter","An iterator over the values of the transition-delay properties."],["TransitionDurationIter","An iterator over the values of the transition-duration properties."],["TransitionPropertyIter","An iterator over the values of the transition-property properties."],["TransitionTimingFunctionIter","An iterator over the values of the transition-timing-function properties."],["UnparsedValue","An unparsed property value that contains `var()` functions."]],"type":[["CascadePropertyFn","A per-longhand function that performs the CSS cascade for that longhand."]]});