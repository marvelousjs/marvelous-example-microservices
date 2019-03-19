import { ServiceJob } from 'marvelous';

import { getData } from '../../UserData';

export class UserActivationJob extends ServiceJob {
  // every day at midnight
  cron = '0 0 * * *';
  handler = async () => {
    const data = getData();

    // get all unverified users
    const unverifiedUsers = data.users.toArray().filter(u => !u.verifiedAt);
    unverifiedUsers.forEach((u) => {
      console.log(`Sending reminder email to ${u.email}...`);

      // send reminder email
    });
  };
}
