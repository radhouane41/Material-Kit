import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeaderLinks from "../components/Header/HeaderLinks";
import classNames from "classnames";
import styles from "../styles/jss/nextjs-material-kit/pages/profilePage";
import GridContainer from "../components/Grid/GridContainer";
import Parallax from "../components/Parallax/Parallax";

// const useStyles = makeStyles((theme) => ({
//   section: {
//     backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   cardHeader: {
//     paddingTop: theme.spacing(3),
//   },
// }));
const useStyles = makeStyles(styles);
export default function PricingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const content = {
    'badge': 'PLANS AND PRICING',
    'header-p1': 'Our plans',
    'header-p2': 'range from starter to entreprise',
    'description': 'Choose your plan', 
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'Starer',
    '01_price': '$9',
    '01_benefit1': '3 Emails',
    '01_benefit2': '1 Database',
    '01_benefit3': 'Unlimited Domains',
    '01_benefit4': '10 GB Storage',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    '02_title': 'Enterprise',
    '02_price': '$49',
    '02_benefit1': '6 Emails',
    '02_benefit2': '2 Database',
    '02_benefit3': 'Unlimited Domains',
    '02_benefit4': '25 GB Storage',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    '03_title': 'Enterprise Plus',
    '03_price': '$499',
    'period_suffix_mo': ' / mo',
    'period_suffix_yr': ' / yr',
    '03_benefit1': '9 Emails',
    '03_benefit2': '3 Database',
    '03_benefit3': 'Unlimited Domains',
    '03_benefit4': '50 GB Storage',
    '03_primary-action': 'Select plan',
    '03_secondary-action': 'Learn more',
    ...props.content
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <div>
    <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
    <div className={classNames(classes.main, classes.mainRaised)}>
    <div className={classes.section}>
    <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3} align="center">
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>

              <div>
                <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
                <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" align="center" >
                <CardHeader title={content['01_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1} >
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['period_suffix_yr'] : content['period_suffix_mo']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" className={classes.profile}>{content['01_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" align="center" >
                <CardHeader title={content['02_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['period_suffix_yr'] : content['period_suffix_mo']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button variant="contained" color="primary">{content['02_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" align="center" >
                <CardHeader title={content['03_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['period_suffix_yr'] : content['period_suffix_mo']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </div>
    </div>
    <Footer />
    </div>
  );
}