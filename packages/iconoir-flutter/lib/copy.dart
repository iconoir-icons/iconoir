import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Copy extends StatelessWidget {
  const Copy({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Copy.svg');
}
