import React, { useEffect } from 'react';
import { RebootingIcon } from '@patternfly/react-icons';
import propTypes from 'prop-types';

const ResetRules = ({
  handleSelect,
  updateRules,
  profile,
  newOsMinorVersion,
  originalRules,
  loading,
  selectedRuleRefIds,
}) => {
  useEffect(() => {
    if (!loading) {
      updateRules(selectedRuleRefIds);
    }
  }, [loading]);

  const resetDefaultRules = () => {
    handleSelect && handleSelect(profile, newOsMinorVersion, originalRules);
  };
  return (
    <a className="pf-u-ml-lg pf-u-mr-xl" onClick={resetDefaultRules}>
      <RebootingIcon className="pf-u-mr-sm" />
      Reset to default
    </a>
  );
};

ResetRules.propTypes = {
  handleSelect: propTypes.func,
  updateRules: propTypes.any,
  profile: propTypes.any,
  newOsMinorVersion: propTypes.any,
  originalRules: propTypes.array,
  loading: propTypes.bool,
  selectedRuleRefIds: propTypes.array,
};

export default ResetRules;
