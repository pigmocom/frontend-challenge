import { cva, RecipeVariantProps } from "@styled-system/css";

export const sidebarItemStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
  
    gap: 3,

    rounded: 'sm',

    paddingInline: 2,
    paddingBlock: 1,

    transition: 'all .3s',

    cursor: 'pointer'
  },
  variants: {
    border: {
      block: {
        borderBlock: '1px solid #35243D'
      },
      top: {
        borderTop: '1px solid #35243D'
      }
    },
    hover: {
      highlight: {
        _hover: {
          background: '#4b3456',
          color: 'white!important'
        },
      }
    }
  }
})

export const sideBarGroupStyle = cva({
  base: {
    height: 'fit-content',
    width: '100%',
  },
  defaultVariants: {
    selected: 'default'
  },
  variants: {
    selected: {
      active: {
        background: 'hsla(285, 24%, 13%, 0.6)',
      },
      default: {
        background: 'hsla(290, 32%, 7%, 1)'
      }
    }
  }
})

export type SidebarItemVariants = RecipeVariantProps<typeof sidebarItemStyle>
export type SidebarGroupVariants = RecipeVariantProps<typeof sideBarGroupStyle>