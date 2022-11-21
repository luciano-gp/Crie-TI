import styled from 'styled-components';

export type BtnVariants = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

interface BtnContainerProps {
    variant: BtnVariants;
}

const btnVariants = {

}

export const BtnContainer = styled.button<BtnContainerProps> `
    width: 300px;
    height: 300px;

`