import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cookie extends StatelessWidget {
  const Cookie({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cookie.svg');
}
