import React from 'react'
import styled, { css } from 'styled-components'
import { onSmWidth } from './const'
import { Icon, IconName } from './Icon'

type Props<T> = {
    options: {
        value: T,
        text: string,
        icon?: IconName
    }[],
    size?: 'md' | 'sm'
    placeholder?: string,
    selected?: T,
    onOptionChange: (optionValue: T) => void
}

export const Dropdown = <T,>({ options, onOptionChange, selected, placeholder = 'Empty', size = 'md' }: Props<T>) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleList = () => setIsOpen(!isOpen)
    const selectedText = options.find((cat) => cat.value === selected)?.text

    const onOptionClicked = (item) => {
        onOptionChange(item.value)
        toggleList()
    }
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (isOpen) {
                    setIsOpen(false)
                }
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    return (
        <DropDownContainer size={size} ref={ref}>
            <DropDownHeader size={size} onClick={toggleList}>
                <>
                    {selectedText && (
                        <>{selectedText}</>
                    )}
                    {!selectedText && (
                        <>{placeholder}</>
                    )}
                </>
                <Icon icon={'down'} />
            </DropDownHeader>
            {isOpen && (
                <DropDownWrapper>
                    <DropDownListContainer size={size}>
                        <DropDownList>
                            {options.map((item) => (
                                <ListItem
                                    key={item.value as any}
                                    onClick={() => onOptionClicked(item)}
                                >
                                    <div>
                                        {item.text}
                                    </div>
                                    <div>
                                        {item.icon && <Icon icon={item.icon} />}
                                    </div>
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                </DropDownWrapper>
            )}
        </DropDownContainer>
    )
}

const DropDownContainer = styled.div<{ size: 'md' | 'sm' }>`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
    ${({ size }) => size === 'sm' && css`
        width: 160px;
    `}
`

const DropDownHeader = styled.div<{ size: 'md' | 'sm' }>`
    border-radius: 8px;
    border: 1px solid #c0cdd8;
    color: #7a7a7a;
    padding: 14px;
    border-radius: 8px;
    font-weight: 500;
    box-sizing: border-box;
    max-height: 48px;
    background: #fff;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        border: 1px solid #dfe6ec;
    }
    ${({ size }) => size === 'sm' && css`
        padding: 7px;
    `}
`

const DropDownWrapper = styled.div`
    position: relative;
    z-index: 1;
`

const DropDownListContainer = styled.div<{ size: 'md' | 'sm' }>`
    position: absolute;
    height: 0;
    border-radius: 8px;
    margin-top: 0px;
    width: 240px;
    right:0;
    ${({ size }) => size === 'sm' && css`
        width: 160px;
    `}
`

const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: -1px;
    background: #fff;
    
    border: 1px solid #c0cdd8;
    border-radius: 8px;
    color: '#8f76df';

    box-shadow: 0px 12px 24px 2px #11111133;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 15px;

    max-height: 80vh;
    overflow-y: auto;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-top: 12px;
    color: #7a7a7a;
    animation: fadeout 0.5s;
    border-radius: 4px;
    user-select: none;
    &:hover {
        color: #8f76df;
        cursor: pointer; 
    }
`