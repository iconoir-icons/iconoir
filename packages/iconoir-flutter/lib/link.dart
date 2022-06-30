import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Link extends StatelessWidget {
  const Link({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Link.svg');
}
