import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PageFlip extends StatelessWidget {
  const PageFlip({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PageFlip.svg');
}
