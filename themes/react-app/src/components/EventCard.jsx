import React, { Component } from 'react';
import { gql } from 'react-apollo';
import { propType as fragmentPropType } from 'graphql-anywhere';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    'minWidth': 'min-content',
    'maxWidth': '300px',
    'flex-shrink': '0',
    'margin': '10px',
  },
  media: {
    height: 200,
  }
};

class EventCard extends Component {
  render () {
    const { classes, event: { Title, Thumbnail, Owner } } = this.props;
    return (
      <Card className={classes.card}>
  <CardMedia
    className={classes.media}
    image={Thumbnail}
    title={Title}
    />
    <CardContent>
    <Typography type='headline' component='h2' align='left'>
      {Title}
      </Typography>
      <Typography component='p' align='left'>
      Event Title: {Title}.
        It's owned by {Owner.Name}.
        Surname {Owner.Surname}.
    </Typography>
    </CardContent>
    <CardActions>
    <Button dense color='primary'>
      Learn More
    </Button>
    </CardActions>
    </Card>
  );
  }
}

EventCard.fragments = {
  event: gql`
    fragment EventOverview on Event {
      Title
      Thumbnail
      Owner {
        Name
        Surname
      }
    }
  `
};

EventCard.propTypes = {
  event: fragmentPropType(EventCard.fragments.event).isRequired
};

export default withStyles(styles)(EventCard);