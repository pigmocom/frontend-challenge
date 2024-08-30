import { css, cva, RecipeVariantProps } from "@styled-system/css";

export const sidebarStyle = css.raw({
  borderRight: '1px solid {colors.border}',
})

export const sidebarItemStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
  
    gap:2,

    rounded: 'sm',

    paddingInline: 1,
    paddingBlock: 1,

    transition: 'all .3s',

    cursor: 'pointer'
  },
  variants: {
    border: {
      block: {
        borderBlock: '1px solid {colors.border}'
      },
      top: {
        borderTop: '1px solid {colors.border}'
      }
    },
    hover: {
      highlight: {
        _hover: {
          background: '#4b3456',
          color: 'white!important',

            '& > svg path': {
              fill: 'primary'
            },

            '& > p': {
              color: 'white'
            }
        },
      }
    }
  }
})

export const sideBarGroupStyle = cva({
  base: {
    transition: 'max-height .25s ease-in-out',
    width: '100%',
    '& > p': {
      color: 'muted'
    }
  },
  defaultVariants: {
    selected: 'default'
  },
  variants: {
    selected: {
      active: {
        background: 'hsla(285, 24%, 13%, 0.6)',
        '& > p': {
          color: 'primary',

        },
        '& > ul': {
          maxHeight: 'max-content',
        }
      },
      default: {
        background: 'hsla(290, 32%, 7%, 1)',

        '& > ul': {
          maxHeight: 0,
        
          '& > li': {
            display: 'none'
          }
        }
      }
    }
  }
})

export const sideBarGroupHeaderStyle = cva({
  base: {
    pl: 6,
    pr: 4,
    paddingBlock: 3,

    borderTop: '1px solid {colors.border}',
  },
  variants: {
    selected: {
      active: {
        borderBlock: '1px solid {colors.border}',
      },
      default: {}
    }
  }
})

export type SidebarItemVariants = RecipeVariantProps<typeof sidebarItemStyle>
export type SidebarGroupVariants = RecipeVariantProps<typeof sideBarGroupStyle>