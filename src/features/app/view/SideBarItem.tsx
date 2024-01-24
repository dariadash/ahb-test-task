import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useDrag, useDrop } from 'react-dnd'

import { Icon, onSmWidth } from '@/ui'

type SideBarItemProps = {
    id: number,
    name: string,
    index: number,
    moveItem: (itemIndex, index) => void
}

const ItemType = 'ITEM'

export const SideBarItem = ({ id, name, index, moveItem }: SideBarItemProps) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem: any) => {
            if (draggedItem.index !== index) {
                moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
        <ItemWrapper
            to={'/'}
            ref={(node) => drag(drop(node))}
            opacity={opacity}
        >
            <Icon
                icon={'star'}
                size={24}
            />
            <ItemName>{name}</ItemName>
        </ItemWrapper>
    );
};

type StyledProps = {
    opacity: number
}

const ItemWrapper = styled(Link) <StyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    font-size: 16px;

    height: 70px;
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    & * {
        color: #a3b7c7;
        padding-right: 10px;
    }

    &:hover {
        background-color: #c0cdd8;
        transition: 0.2s;
        svg {
            fill: #eff4ff;
            stroke: #eff4ff;
        }
    }

    ${onSmWidth} {
        margin-bottom: 24px;

        & * {
            padding-right: 0;
        }
    }

    ${({ opacity }) => opacity && css`
        opacity: ${opacity};
    `}
`

const ItemName = styled.div`
    color: #111;
    ${onSmWidth} {
        display: none;
    }
`
