import React from 'react'
import styled, { css } from 'styled-components'
import { onSmWidth } from './const'
import { Icon, IconName } from './Icon'

type Props<T> = {
    options: {
        value: T,
        text: string
    }[],
    placeholder?: string,
    selected?: T,
    onOptionChange: (optionValue: T) => void
}

export const Dropdown = <T,>({ options, onOptionChange, selected, placeholder = 'Empty' }: Props<T>) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [dropUp, setDropUp] = React.useState(false)
    const toggleList = () => setIsOpen(!isOpen)
    const selectedText = options.find((cat) => cat.value === selected)?.text

    const onOptionClicked = (item) => {
        onOptionChange(item.value)
        toggleList()
    }
    const ref = React.useRef<HTMLDivElement>(null)

    const handleDropdownPosition = () => {
        const dropdown = ref.current;
        if (dropdown) {
            const { top, height } = dropdown.getBoundingClientRect();
            const spaceAbove = top;
            const spaceBelow = window.innerHeight - (top + height);
            if (spaceBelow < 200 && spaceAbove > 200) {
                setDropUp(true);
            } else {
                setDropUp(false);
            }
        }
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (isOpen) {
                    setIsOpen(false)
                }
            }
        }
        handleDropdownPosition();
        document.addEventListener('click', handleClickOutside)
        window.addEventListener('resize', handleDropdownPosition)
        return () => {
            window.removeEventListener('resize', handleDropdownPosition)
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen, dropUp])

    return (
        <DropDownContainer ref={ref}>
            <DropDownHeader onClick={toggleList}>
                {selectedText ? <>{selectedText}</> : <>{placeholder}</>}
                <Icon icon={'down'} />
            </DropDownHeader>
            {isOpen && (
                <DropDownWrapper>
                    <DropDownListContainer dropUp={dropUp}>
                        {options.map((item) => (
                            <ListItem
                                key={item.value as any}
                                onClick={() => onOptionClicked(item)}
                            >
                                <>{item.text}</>
                            </ListItem>
                        ))}
                    </DropDownListContainer>
                </DropDownWrapper>
            )}
        </DropDownContainer>
    )
}


type DropDownProps = {
    dropUp: boolean
}

const DropDownContainer = styled.div`
    min-width: 220px;
    ${onSmWidth} {
        width: 100%;
    }
`

const DropDownHeader = styled.div`
    border-radius: 8px;
    border: 1px solid #c0cdd8;
    padding: 10px;
    color: #7a7a7a;
    font-weight: 500;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;
    user-select: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        border: 1px solid #dfe6ec;
    }
    
`

const DropDownWrapper = styled.div`
    position: relative;
    z-index: 1;
`

const DropDownListContainer = styled.div<DropDownProps>`
    position: absolute;
    border-radius: 8px;
    width: 240px;

    background: #fff;
    
    border: 1px solid #c0cdd8;
    border-radius: 8px;
    color: #8f76df;

    box-shadow: 0px 12px 24px 2px #11111133;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 16px;

    max-height: 80vh;
    overflow-y: auto;

    ${({ dropUp }) => dropUp && css`
        bottom: 40px;
        box-shadow: none;
    `}
`

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;

    padding: 12px 8px;

    color: #7a7a7a;
    animation: fadeout 0.5s;
    border-radius: 4px;
    user-select: none;
    &:hover {
        color: #8f76df;
        cursor: pointer; 
    }
`