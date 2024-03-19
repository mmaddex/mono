#!/usr/bin/env bash
# exit on error
set -o errexit
echo "DEPHOOOOOK"
if [ "$IS_PULL_REQUEST" = "true" ]; then
  echo "In preview environment. Performing preview-specific actions."
else
  echo "Not in preview environment. Performing standard action."
fi
