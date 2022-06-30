import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Copyright extends StatelessWidget {
  const Copyright({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Copyright.svg');
}
