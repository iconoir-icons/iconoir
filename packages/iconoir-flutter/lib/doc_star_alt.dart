import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DocStarAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DocStarAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6349 10.4151L11.674 8.21211C11.8073 7.9293 12.1927 7.9293 12.326 8.21211L13.3651 10.4151L15.6886 10.7706C15.9867 10.8162 16.1055 11.1997 15.8897 11.4198L14.2087 13.1334L14.6054 15.5543C14.6564 15.8652 14.3446 16.1022 14.0778 15.9554L12 14.8118L9.92219 15.9554C9.65544 16.1022 9.34363 15.8652 9.39458 15.5543L9.7913 13.1334L8.1103 11.4198C7.89447 11.1997 8.01329 10.8162 8.31141 10.7706L10.6349 10.4151Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
