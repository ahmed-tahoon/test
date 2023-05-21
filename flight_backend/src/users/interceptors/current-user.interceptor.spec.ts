import { CurrentUserInterceptor } from './current-user.interceptor';

describe('CurrentUserInterceptor', () => {
  it('should be defined', () => {
    expect(new CurrentUserInterceptor()).toBeDefined();
  });
});
