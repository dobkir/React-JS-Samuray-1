import classes from './Post.module.css';
import ava1 from './../../../../images/ava-1.webp';

const Post = () => {
	return (
		<div className={classes.item}>
			<img className={classes.avatar} src={ava1} alt='avatar' />
			<p className={classes.post}>post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat animi ut et
			dolorem tenetur, maxime expedita fugit iusto qui voluptates saepe est. Quibusdam sint laboriosam ex ad, dolore
			commodi dicta repellendus blanditiis aliquid assumenda officiis porro repudiandae mollitia incidunt deleniti laborum
			dolor atque reiciendis quo autem earum. Ab blanditiis consequuntur consequatur error deleniti? Culpa numquam amet
			quaerat iste doloribus nesciunt cum id provident hic architecto fugit commodi quas, ad beatae qui quae perferendis.
			Sunt repudiandae voluptatum a quo adipisci dignissimos qui. Fugiat necessitatibus tempore sapiente dolor et
			laboriosam quod placeat ullam eius nam nisi ipsum quia nesciunt similique magnam obcaecati aliquid doloremque nihil
			quis facere dolorem, odio voluptatem laborum. Quasi molestiae assumenda asperiores saepe enim sapiente, laboriosam,
			distinctio a iste fugiat laborum fuga dolore vero quisquam ex inventore, neque eaque incidunt iure doloremque.
			Repellendus earum dolor quisquam tempore cumque sapiente assumenda dolorem id odit. Quae exercitationem incidunt
			excepturi ipsum obcaecati saepe, aperiam asperiores consequatur consectetur porro illum. Excepturi quas voluptate id
			veritatis dolor eum iure? Dolor maiores quam omnis maxime ratione error, labore rem repudiandae perferendis ipsam
			molestias eius necessitatibus fugit? Dolorem deserunt recusandae, molestiae sit voluptatem saepe similique.
			Cupiditate iste nisi voluptate officia fugit porro nam non reprehenderit dolores?</p>
			<div className={classes.like}>
				<p><i class="fa fa-heart fa-lg"> 0</i></p>
			</div>
		</div>
	);
};

export default Post;
