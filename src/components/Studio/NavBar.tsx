import { NavbarProps, useWorkspace } from 'sanity';
import { Card, Stack, Text } from '@sanity/ui';

function Navbar(props: NavbarProps) {
  return (
    <Stack className='sticky top-0'>
      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  );
}

export default Navbar;

