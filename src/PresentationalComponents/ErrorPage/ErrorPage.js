import React from 'react';
import propTypes from 'prop-types';
import { Title, Button, Text } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import InvalidObject from '@redhat-cloud-services/frontend-components/InvalidObject';
import NotAuthorized from '@redhat-cloud-services/frontend-components/NotAuthorized';

const ErrorPage = ({ error, ...props }) => {
  if (error.networkError && error.networkError.statusCode === 401) {
    window.insights.chrome.auth.logout(true);
    return false;
  }

  if (error.networkError && error.networkError.statusCode === 403) {
    return <NotAuthorized serviceName="Compliance" />;
  }

  if (error.networkError && error.networkError.statusCode === 404) {
    return <InvalidObject />;
  }

  return (
    <section
      {...props}
      className="pf-l-page__main-section pf-c-page__main-section ins-c-component_invalid-componet"
    >
      <ExclamationCircleIcon
        size="xl"
        style={{ color: 'var(--pf-global--danger-color--100)' }}
      />
      <Title headingLevel="h1">There was an error</Title>
      <Text>
        If you need to contact Red Hat Support about this, this is the exact
        error:
        <Text>{error.message}</Text>
      </Text>
      <Button
        variant="link"
        ouiaId="ErrorPageGoBackButton"
        onClick={history.goBack}
      >
        Go back
      </Button>
    </section>
  );
};

ErrorPage.propTypes = {
  error: propTypes.object,
};

export default ErrorPage;
