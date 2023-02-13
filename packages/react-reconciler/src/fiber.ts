import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	ref: Ref;
	memorizedProps: Props | null;

	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		// 保存对应的DOM
		this.stateNode = null;
		// FunctionComponent ()=>{}
		this.type = null;

		// 构成树状结构
		// 指向父fiberNode
		this.return = null;
		// 指向右边fiberNode
		this.sibling = null;
		this.child = null;
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps; // 刚开始准备工作
		this.memorizedProps = null; // 工作完后确定下来的props

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
