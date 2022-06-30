import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gift extends StatelessWidget {
  const Gift({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Gift.svg');
}
