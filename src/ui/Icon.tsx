import React from 'react'

import { CgProfile } from 'react-icons/cg'
import { HiOutlineLogout } from 'react-icons/hi'
import {
  FaClipboardList,
  FaUsers,
  FaGem
} from 'react-icons/fa'
import {
  AiOutlinePlus,
  AiOutlineCheck,
  AiOutlineCaretDown,
  AiFillCloseCircle,
  AiOutlineSearch,
} from 'react-icons/ai'
import {
  BsPeople,
  BsCloudUpload,
  BsFillTrashFill,
  BsInfoCircle,
  BsListStars,
  BsGrid3X2Gap
} from 'react-icons/bs'
import {
  GiRoundStar,
  GiAchievement
} from 'react-icons/gi'
import {
  BiEditAlt,
  BiSend,
  BiReset,
  BiSelectMultiple,
} from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'


const Icons = {
  'multiselect': BiSelectMultiple,
  'list-view': BsListStars,
  'grid-view': BsGrid3X2Gap,
  'profile': CgProfile,
  'logout': HiOutlineLogout,
  'list': FaClipboardList,
  'add': AiOutlinePlus,
  'noavatar': BsPeople,
  'users': FaUsers,
  'edit': BiEditAlt,
  'star': GiRoundStar,
  'gem': FaGem,
  'upload': BsCloudUpload,
  'delete': BsFillTrashFill,
  'check': AiOutlineCheck,
  'info': BsInfoCircle,
  'message': AiOutlineMessage,
  'achievements': GiAchievement,
  'down': AiOutlineCaretDown,
  'close': AiFillCloseCircle,
  'send': BiSend,
  'reset': BiReset,
  'search': AiOutlineSearch,
}

export type IconName = keyof typeof Icons

type Props = {
  icon: IconName
  size?: number
  onClick?: () => void
  color?: string
}

export const Icon = ({ icon, size, onClick, color }: Props) => {
  const Component = Icons[icon]
  return <Component size={size} onClick={onClick} color={color} />
}