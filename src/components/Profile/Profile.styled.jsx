import styled from '@emotion/styled';

export const ProfileBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4e6e5;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-image: linear-gradient(
      to left,
      #bae3f1 0%,
      #b9f0bb 46%,
      #edeab0 100%);
    `;

export const ProfileDesc = styled.div`
    padding: 40px;
    width: 100%;
    text-align: center;
    background-color: #eaf3df;
  `;

export const UserAvatar = styled.img`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    width: 150px;
    display: block;
    border-radius: 50%;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  `;

export const UserName = styled.p`
    margin-bottom: 7px;
    font-size: 28px;
    font-weight: 700;
  `;

export const UserTag = styled.p`
    margin-bottom: 7px;
    font-size: 18px;
    text-shadow: var(--main-shadow);
    color: var(--secondary); 
  `;
export const UserLocation = styled.p`
  font-size: 18px;
  color: var(--secondary);
  `;

export const ProfileList = styled.ul`
    display: flex;
    padding: 0;
    max-width: 100vh;
  `;

export const ProfileItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  text-align: center;
  width: 100%;
  border-left: 1px solid grey;
  border-top: 1px solid grey;
  border-bottom: 1px solid gray;
  :last-child {
    border-right: 1px solid grey; 
  }
  `;

export const ProfileLabel = styled.span`
    font-weight: 500;
    color: var(--secondary);
    text-shadow: var(--main-shadow);
    gap: 7px;
  `;

export const ProfileQuantity = styled.span`
    font-weight: 700;
    color: var(--accent);
    text-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  `;
