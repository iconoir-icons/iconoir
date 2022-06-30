import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Language extends StatelessWidget {
  const Language({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Language.svg');
}
