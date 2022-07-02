import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class JournalPage extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const JournalPage({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6L14 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14L18 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H18.2515C18.4106 2 18.5632 2.06321 18.6757 2.17574L21.8243 5.32426C21.9368 5.43679 22 5.5894 22 5.74853V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 5.4V2.35355C18 2.15829 18.1583 2 18.3536 2C18.4473 2 18.5372 2.03725 18.6036 2.10355L21.8964 5.39645C21.9628 5.46275 22 5.55268 22 5.64645C22 5.84171 21.8417 6 21.6464 6H18.6C18.2686 6 18 5.73137 18 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18V14H8V18H6Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
