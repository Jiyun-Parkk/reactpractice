import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { useMemo } from 'react';

export default function useAction(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((action) => bindActionCreators(action, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
}
