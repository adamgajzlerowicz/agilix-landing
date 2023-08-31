import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'gatsby';
import GlobalContext from '../../context/GlobalContext';

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const defaultMenuItems = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance' },
      {
        name: 'notifications',
        label: 'Notifications',
        items: [
          { name: 'email', label: 'Email' },
          {
            name: 'desktop',
            label: 'Desktop',
            items: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' },
            ],
          },
          { name: 'sms', label: 'SMS' },
        ],
      },
    ],
  },
];

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const gContext = useContext(GlobalContext);

  return (
    <ListGroup.Item
      {...rest}
      css={`
        padding-left: ${depth * depthStep}px !important;
      `}>
      {isExternal ? (
        <a
          target="_blank"
          href={`${name}`}
          onClick={() => {
            if (gContext.visibleOffCanvas) {
              gContext.toggleOffCanvas();
            }
          }}>
          {label}
        </a>
      ) : (
        <Link
          to={`/${name}`}
          onClick={() => {
            if (gContext.visibleOffCanvas) {
              gContext.toggleOffCanvas();
            }
          }}>
          {label}
        </Link>
      )}
    </ListGroup.Item>
  );
};

const NestedMenu = ({ menuItems = defaultMenuItems }) => (
  <NestedMenuContainer>
    <ListGroup variant="flush">
      {menuItems.map((menuItem, index) => (
        <MenuItem key={`${menuItem.name}${index}`} depthStep={20} depth={0} {...menuItem} />
      ))}

      <MenuItem key={'pobierz'} depthStep={20} depth={0} label={'Pobierz teraz'} name={'pobierz'} />
    </ListGroup>
  </NestedMenuContainer>
);

export default NestedMenu;
