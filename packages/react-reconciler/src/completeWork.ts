// 递归中的归
import { FiberNode } from './fiber';

export const completeWork = (node: FiberNode) => {
	console.log('hello world', node);
};
