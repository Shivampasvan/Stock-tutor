import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../images/logo.png";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function DefaultNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { logout, isAuthenticated } = useAuth0();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        zIndex={"100"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        position={"-webkit-sticky"}
        pos={"static"}
        top={0}
        position={"fixed"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* work on the icon */}
          <RouterLink to="/">
            <HStack>
              <Image src={logo} boxSize={"30px"} />
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                // color={useColorModeValue('gray.800', 'white')}>
                fontSize={{ base: "14", sm: "20", md: "20", lg: "20" }}
                color={useColorModeValue("#22D172", "black")}
              >
                Stock Tutor
              </Text>
            </HStack>
          </RouterLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAuthenticated ? (
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"outline"}
              onClick={() => logout({ returnTo: window.location.origin })}
              href={"#"}
            >
              Logout
            </Button>
          ) : (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"15"}
              fontWeight={600}
              color={"Black"}
              bg={"#22D172"}
              href={"#"}
              px={9}
            >
              Login
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, linkImg }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Image boxSize="30px" src={linkImg} alt="linkImg" />
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#22D172" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    children: [
      {
        // label:<RouterLink to="/qna">'QA Automation'</RouterLink>,
        label: "Our Company",
        subLabel: "Know more about Stock Tutor",
        href: "#",
        linkImg: `https://images.template.net/85515/free-business-organization-vector-gus7h.jpg`,
      },
      {
        label: "Our Instructors",
        subLabel: "Best in Industry Intructors",
        href: "#",
        linkImg: `https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/einvoice-banner-home.svg`,
      },
      {
        label: "OTA Perspectives",
        subLabel: "Your Own STMP Server",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg`,
      },
      {
        label: "Careers",
        subLabel: "Start your career now",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg`,
      },
    ],
  },
  {
    label: "Education",
    children: [
      {
        // label:<RouterLink to="/qna">'QA Automation'</RouterLink>,
        label: "Getting Started Process",
        subLabel: "Start process with full knowledge",
        href: "#",
        linkImg: `https://images.template.net/85515/free-business-organization-vector-gus7h.jpg`,
      },
      {
        label: "Education Path",
        subLabel: "Know correct path to follow",
        href: "#",
        linkImg: `https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/einvoice-banner-home.svg`,
      },
      {
        label: "OTA Perspectives",
        subLabel: "Your Own STMP Server",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg`,
      },
      {
        label: "Careers",
        subLabel: "Start your career now",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg`,
      },
    ],
  },
  {
    label: "Pricing",
    children: [
      {
        // label:<RouterLink to="/qna">'QA Automation'</RouterLink>,
        label: "Our Company",
        subLabel: "Know more about Stock Tutor",
        href: "#",
        linkImg: `https://images.template.net/85515/free-business-organization-vector-gus7h.jpg`,
      },
      {
        label: "Our Instructors",
        subLabel: "Best in Industry Intructors",
        href: "#",
        linkImg: `https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/einvoice-banner-home.svg`,
      },
      {
        label: "OTA Perspectives",
        subLabel: "Your Own STMP Server",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg`,
      },
      {
        label: "Careers",
        subLabel: "Start your career now",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg`,
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Tradetelligence",
        subLabel: "Integrate with existing resources",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-09.svg`,
      },
      {
        label: "Case Studies",
        subLabel: "Success stories of our customers",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-08.svg`,
      },
      {
        label: "Blog",
        subLabel: "The best content about Stock Tutor",
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-07.svg`,
      },
      {
        label: "Help",
        subLabel: `How-t's and Knowledge base`,
        href: "#",
        linkImg: `https://mailtrap.io/wp-content/uploads/2022/03/Transactional-Email-Sending_icon-06.svg`,
      },
    ],
  },
];
