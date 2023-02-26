// 递归中的归
import { FiberNode } from './fiber';
import { HostComponent, HostRoot, HostText } from './workTags';
import { createInstance, createTextInstance } from 'hostConfig';
import { appendAllChildren, bubbleProperties } from './childFibers';

export const completeWork = (wip: FiberNode) => {
	const newProps = wip.pendingProps;
	const current = wip.alternate;

	switch (wip.tag) {
		case HostComponent:
			if (current !== null && wip.stateNode) {
				// update
			} else {
				// mount
				// 1.构建DOM
				const instance = createInstance(wip.type, newProps);
				// 2.将DOM插入到DOM树中
				appendAllChildren(instance, wip);
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
		case HostText:
			if (current !== null && wip.stateNode) {
				// update
			} else {
				// mount
				// 1.构建DOM
				const instance = createTextInstance(newProps.content);
				// 2.将DOM插入到DOM树中
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
		case HostRoot:
			bubbleProperties(wip);
			return null;
		default:
			if (__DEV__) {
				console.warn('未处理的completeWork', wip);
			}
			break;
	}
};
