/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload, ContactMail, List as ListIcon, Note } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/blog"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fa fa-rss"} />Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/aboutus"
          color="transparent"
          className={classes.navLink}
        >
          <Note className={classes.icons} /> About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          className={classes.navLink}
        >
          <ContactMail className={classes.icons} /> Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/pricing"
          color="transparent"
          className={classes.navLink}
        >
          <ListIcon className={classes.icons} /> Pricing
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/signup"
          className={classes.registerNavLink}
          //onClick={(e) => e.preventDefault()}
          color="rose"
          round
          // size="sm"
        >
          Sign Up
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          className={classes.registerNavLink}
          //onClick={(e) => e.preventDefault()}
          color="white"
          round={true}
          // size="sm"
        >
          Login
        </Button>
      </ListItem>
    </List>
  );
}
