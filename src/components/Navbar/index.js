import DollarIcon from '../icons/DollarIcon';
import DraftIcon from '../icons/DraftIcon';
import LicenseIcon from '../icons/LicenseIcon';
import LogoIcon from '../icons/LogoIcon';
import LogOutIcon from '../icons/LogOutIcon';
import PencilIcon from '../icons/PencilIcon';
import PlusIcon from '../icons/PlusIcon';
import {RoundIcon} from '../icons/RoundIcon';
import SettingsIcon from '../icons/SettingsIcon';
import TruckIcon from '../icons/TruckIcon';
import {BottomContainer, Container, Menu, MenuItem, MenuWrapper, TextIconWrapper} from './styles';

const Navbar = () => {
    return (
        <Container>
            <div>
                <LogoIcon/>
                <Menu>
                    <MenuItem>
                        <TextIconWrapper>
                            <RoundIcon width="30px" height="30px">
                                <DollarIcon/>
                            </RoundIcon>
                            <span>Ratecon</span>
                        </TextIconWrapper>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: '20px'
                        }}>
                            <RoundIcon width="20px" height="20px">
                                <PlusIcon/>
                            </RoundIcon>
                            <RoundIcon width="20px" height="20px">
                                <PencilIcon/>
                            </RoundIcon>
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <TextIconWrapper>
                            <DraftIcon width={33} height={29} color="#338EB4"/>
                            <span>Drafts</span>
                        </TextIconWrapper>
                    </MenuItem>
                    <MenuItem>
                        <TextIconWrapper>
                            <TruckIcon/>
                            <span>Loads</span>
                        </TextIconWrapper>
                    </MenuItem>
                    <MenuItem>
                        <TextIconWrapper>
                            <LicenseIcon />
                            <span>Drivers</span>
                        </TextIconWrapper>
                    </MenuItem>
                </Menu>
            </div>
            <BottomContainer>
                <MenuItem>
                    <TextIconWrapper>
                        <SettingsIcon />
                        <span>Settings</span>
                    </TextIconWrapper>
                </MenuItem>
                <MenuItem>
                    <TextIconWrapper>
                        <LogOutIcon />
                        <span>Log Out</span>
                    </TextIconWrapper>
                </MenuItem>
            </BottomContainer>
        </Container>
    )
}

export default Navbar
