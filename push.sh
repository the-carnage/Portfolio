#!/bin/bash

echo "Enter Commit Line"
read commit
git add .
git commit -m "$commit"
git push
