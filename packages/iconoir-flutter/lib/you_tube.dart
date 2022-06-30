import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class YouTube extends StatelessWidget {
  const YouTube({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/YouTube.svg');
}
