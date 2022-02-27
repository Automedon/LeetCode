# Read from the file file.txt and output all valid phone numbers to stdout.
grep -Po '^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$' file.txt
