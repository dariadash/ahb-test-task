import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { onSmWidth } from '@/ui'
import { SideBarItem } from './SideBarItem'

const sideBarItems = [
    {
        id: 1,
        name: 'Главная',
        icon: 'star'
    },
    {
        id: 2,
        name: 'Отметиться',
        icon: 'star'
    },
    {
        id: 3,
        name: 'Новости',
        icon: 'star'
    },
    {
        id: 4,
        name: 'Сообщения',
        icon: 'star'
    },
    {
        id: 5,
        name: 'Выйти',
        icon: 'star'
    },
]

export const SideBar = () => {
    const [items, setItems] = React.useState(sideBarItems);
    const moveItem = (fromIndex, toIndex) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Container>
                <Wrapper>
                    {items.map((item, index) => (
                        <SideBarItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            index={index}
                            moveItem={moveItem}
                        />
                    ))}
                </Wrapper>
            </Container>
        </DndProvider>
    );
}

const Container = styled.div`
    width: 20%;
    border-right: 1px solid #dfe6ec;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: #eff4ff;
    background-size: cover;
    z-index: 11;

    ${onSmWidth} {
        z-index: 999;
        width: 100vw;
        flex-direction: row;
        bottom: 0;
        top: auto;
        height: 64px;
        align-items: center;
        border-top: #dfe6ec;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 12px;

    ${onSmWidth} {
        flex-direction: row;
        justify-content: space-around;
        padding: none;
    }
`

