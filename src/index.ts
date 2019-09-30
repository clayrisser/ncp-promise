import { ncp, Options } from 'ncp';

export default async function ncpPromise(
  src: string,
  dest: string,
  options: Options = {}
): Promise<void> {
  return new Promise((resolve, reject) => {
    ncp(src, dest, options, (err: Error) => {
      if (!err) return resolve();
      return reject(err);
    });
  });
}

export { Options };
